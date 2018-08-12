import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameObject} from '../../graphic/object/GameObject';
import {Color} from '../../graphic/object/Color';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @ViewChild('mapCanvas') canvasRef: ElementRef;

  private context: CanvasRenderingContext2D;

  private mockList: GameObject[] = [
    new GameObject('Warrior', Color.RED, 50, 50)
  ];

  ngOnInit() {
    this.context = this.canvasRef.nativeElement.getContext('2d');
    this.draw(this.mockList);
  }

  public draw(objects: GameObject[]) {
    this.context.beginPath();

    objects.forEach(gameObject => {
      this.drawGameObject(gameObject);
    });

    // At the end
    this.context.fill();
  }

  private drawGameObject(object: GameObject) {
    this.context.fillStyle = this.getColor(object.color);
    const x = object.x;
    const y = object.y;
    this.context.moveTo(x, y);
    this.context.arc(x, y, 4, 0, Math.PI * 2);
  }

  private getColor(color: Color): string {
    switch (color) {
      case Color.RED: return 'red';
      default: return 'blue';
    }
  }
}
