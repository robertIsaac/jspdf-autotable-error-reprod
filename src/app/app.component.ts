import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private autoTable: unknown;
  autoTableType?: string;

  async ngOnInit() {
    this.autoTable = await import('jspdf-autotable').then((library) => library.default);
    console.log(this.autoTable);
    this.autoTableType = typeof this.autoTable;
  }
}
