import { Component, Input } from '@angular/core';
import { environment } from '@environment/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {

  @Input() images:string[] = [];
  @Input() classes:string = "";
  @Input() contentClass:string = "";

  imagePath = environment.imagePath;
  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;

}
