export abstract class AbstractDashboardCard {
  constructor(private _id: number,
              private _name: string,
              private _routerLink: string,
              private _iconClass: string,
              
              private _color: string
              ) {
  }

  get name(): string {
    return this._name;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  get color(): string {
    return this._color;
  }

  get id(): number {
    return this._id;
  }
  
}
