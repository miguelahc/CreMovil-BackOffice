import { 
    Component, OnInit, OnDestroy, Input, Type, ComponentFactoryResolver, 
    ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';
  import { Subject, pipe } from 'rxjs';
  import { takeUntil } from 'rxjs/operators';
  
  import { SidePanelOverlayService } from './side-panel-overlay.service';
  import { SidePanelOverlayStyle } from './side-panel-overlay-style.enum';
  import { FADE_IN_OUT } from '../animations/fade-in-out.animation';
  
  @Component({
    selector: 'app-side-panel-overlay',
    templateUrl: './side-panel-overlay.component.html',
    styleUrls: ['side-panel-overlay.component.scss'],
    animations: [FADE_IN_OUT]
  })
  export class SidePanelOverlayComponent implements OnInit, OnDestroy {
    
    @ViewChild('content',  {
    read: ViewContainerRef,
    static: true
    }) 
    public panelContentRef: ViewContainerRef;
  
    @Input()
    public overlayStyle: SidePanelOverlayStyle
  
    public isPanelVisible: boolean;
  
    private _sidePanelServiceSubject$: Subject<void>;
  
    constructor(
      private _componentFactoryResolver: ComponentFactoryResolver, 
      private _overlaySidePanelService: SidePanelOverlayService
    ) { 
      this._sidePanelServiceSubject$ = new Subject<void>();
      this.overlayStyle = SidePanelOverlayStyle.DIM_DARK;
    }
  
    ngOnInit(): void {
      this._overlaySidePanelService.onPanelVibilityChange()
        .pipe(takeUntil(this._sidePanelServiceSubject$))
        .subscribe((visible: boolean) => this.isPanelVisible = visible);
  
      this._overlaySidePanelService.onContentChange()
        .pipe(takeUntil(this._sidePanelServiceSubject$))
        .subscribe((component: Type<any>) => this._setPanelContent(component));
    }
    
    public close(): void {
      this._overlaySidePanelService.close();
    }
  
    private _setPanelContent(component: Type<any>) {
      const componentFactory: ComponentFactory<any> = this._componentFactoryResolver.resolveComponentFactory(component);
      this.panelContentRef.clear();
      this.panelContentRef.createComponent(componentFactory);
    }
  
    ngOnDestroy() {
      this._sidePanelServiceSubject$.next();
      this._sidePanelServiceSubject$.complete();
    }
  }