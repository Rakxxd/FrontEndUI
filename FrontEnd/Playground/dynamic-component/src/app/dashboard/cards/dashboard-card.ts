import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardCardsService } from '../services/dashboard-card.service';

export class DashboardCard {
  static metadata: any = {
    ID: new InjectionToken<string>('id'),
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    ICONCLASS: new InjectionToken<string>('iconClass'),
    // COLS: new InjectionToken<Observable<number>>('cols'),
    // ROWS: new InjectionToken<Observable<number>>('rows'),
    
    COLOR: new InjectionToken<string>('color')
    
    
  };

   public metadataVar: any = {
    ID: new InjectionToken<string>('id'),
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    ICONCLASS: new InjectionToken<string>('iconClass'),
    // COLS: new InjectionToken<Observable<number>>('cols'),
    // ROWS: new InjectionToken<Observable<number>>('rows'),
    
    COLOR: new InjectionToken<string>('color')
    
    
  };

  constructor(private _input?: {
    id : {
      key: InjectionToken<string>;
      value: string
    },name: {
      key: InjectionToken<string>,
      value: string
    },
    routerLink: {
      key: InjectionToken<string>,
      value: string
    },
    iconClass: {
      key: InjectionToken<string>,
      value: string
    },   
     color: {
       key: InjectionToken<string>,
       value: string
     }
  }, private _component?: {
    names:any
  },
  private _services? :  { provide: any, 
    useClass: any, 
    deps: Array<any> }             
  ) {
  }


  

  get input(): {
    id : {
      key: InjectionToken<number>;
      value: string
    },name: {
      key: InjectionToken<string>;
      value: string
    };
    routerLink: {
      key: InjectionToken<string>;
      value: string
    };
    iconClass: {
      key: InjectionToken<string>;
      value: string
    };    
    color: {
      key: InjectionToken<string>;
      value: string
    }
  } {
    return this._input;
  }

  get component(): any {
    
    return this._component.names;
  }
  get services(): any {
    return this._services;
 }

 

 
 



}
