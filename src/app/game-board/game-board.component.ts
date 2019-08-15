import { Component, Input, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

const NUMBER_OF_ROWS: number = 15;
const NUMBER_OF_BLOCKS: number = 30;

@Component({
    selector: 'game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements AfterViewInit {

    @Input('imageSrc') imageSrc: string = './assets/testcanvasimg.jpg';
    @Input('height') height: number = 645;
    @Input('width') width: number = 1290;

    @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
    @ViewChild('final', { static: true }) final: ElementRef<HTMLImageElement>;

    rows: number[];
    tiles: number[];
    tileSize: string;

    public context: CanvasRenderingContext2D;

    private img: HTMLImageElement = new Image();

    constructor() {
        this.rows = Array(NUMBER_OF_ROWS).fill(0).map((_, idx) => idx);
        this.tiles = Array(NUMBER_OF_BLOCKS).fill(0).map((_,idx) => idx);
        const size = this.width / this.tiles.length;
        this.tileSize = `${size}px`;
    }

    ngAfterViewInit() {
        this.context = this.canvas.nativeElement.getContext('2d');
        this.img.onload = () => {
            this.context.drawImage(
                this.img, 
                0,
                0,
                this.img.width,
                this.img.height,
                0,
                0,
                this.width,
                this.height);
        };   
        this.img.src = this.imageSrc;
    }

}