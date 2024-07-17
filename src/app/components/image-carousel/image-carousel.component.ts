import { Component, Input, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { environment } from '@environment/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretLeft, faCaretRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'flowbite';
import type { CarouselItem, CarouselOptions, CarouselInterface, InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent implements AfterViewInit {

  @ViewChild('carousel', { static: true }) carouselElement!: ElementRef;
  @ViewChildren('carouselItem') carouselItem!: QueryList<ElementRef>;
  @ViewChildren('carouselIndicator') carouselIndicator!: QueryList<ElementRef>;

  @Input() images:string[] = [];
  @Input() classes:string = "";
  @Input() contentClass:string = "";

  imagePath = environment.imagePath;
  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;
  faPause= faPause;

  items: CarouselItem[] = [];
  options: CarouselOptions = {};
  instanceOptions: InstanceOptions = {};
  carousel!: CarouselInterface;
  cycling: boolean = true;

  ngAfterViewInit(): void {

    this.carouselItem.forEach((item, index) => {
      this.items.push({
        position: index,
        el:HTMLElement = item.nativeElement,
      });
    });

    const itemsIndicator = this.carouselIndicator.map((item, index) => {
      return {
        position: index,
        el:HTMLElement = item.nativeElement,
      };
    });
    
    // object options with default values
    this.options = {
      defaultPosition: 0,
      interval: 6000,
      indicators: {
          items: itemsIndicator,
      },
  
      // callback functions
      onNext: () => {
        //
      },
      onPrev: () => {
        //
      },
      onChange: () => {
        //
      },
    };

    // instance options object
    this.instanceOptions = {
      id: 'carousel',
      override: true
    };
    const carouselElement: HTMLElement = this.carouselElement.nativeElement;
    this.carousel = new Carousel(carouselElement, this.items, this.options, this.instanceOptions);

    this.carousel.cycle();
  }

  dataPrev() {
    this.carousel.prev();
  }

  dataNext() {
    this.carousel.next();
  }

  dataPause(){
    this.cycling = !this.cycling;
    this.carousel.pause();
  }

  dataCycle(){
    this.cycling = !this.cycling;
    this.carousel.cycle();
  }

}
