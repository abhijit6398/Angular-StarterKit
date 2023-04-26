import { Component, Input, SimpleChanges } from '@angular/core'
import { SeriesLabelsAlignment, SeriesLabelsContentArgs, SeriesType } from '@progress/kendo-angular-charts';

interface Model {
  skills: string
  count: number
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {

  constructor(){}
  public labelContent = (e: SeriesLabelsContentArgs): string => {
    return e.value
  };
  public labelStyle : SeriesLabelsAlignment = "column"
  public dummyData:any;
  @Input() type: SeriesType = "column";
  @Input() list: string[] = [];

  public seriesData: Model[] = [
    {
      skills: 'Angular',
      count: 21,
    },
    {
      skills: 'React',
      count: 10,
    },
    {
      skills: 'Vue',
      count: 2,
    },
  ];

  @Input() data! : Model[];


  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    const sup = this.list?.map((item:any)=>{
      let items = this.data?.filter((x:any)=>{
        return x.skills?.includes(item)
      })
      return {skills:item, count:items?.length}
     });
     this.seriesData = sup; 
    if(changes['data']?.firstChange) return;
   this.data = changes['data']?.currentValue;
  }


  ngDoCheck(): void { 

  }
}



