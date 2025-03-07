import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  anomalyData: ChartData<'bar'> = { labels: [], datasets: [{ data: [], label: 'Anomalies' }] };
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAnomalies('2024-01-01', '2024-12-31').subscribe((data: { date: string, count: number }[]) => {
      this.anomalyData.labels = data.map((d: { date: string }) => d.date);
      this.anomalyData.datasets[0].data = data.map((d: { count: number }) => d.count);
    });
  }
}
