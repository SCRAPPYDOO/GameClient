import {Color} from './Color';

export class GameObject {
  private _type;
  private _x: number;
  private _y: number;
  private _color: Color;

  constructor(type, color: Color, x: number, y: number) {
    this._type = type;
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;
  }
}
