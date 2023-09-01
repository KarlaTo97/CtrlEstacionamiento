import { CorteCajaService } from '../../services/corte.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corte-caja',
  templateUrl: './corte-caja.component.html',
  styleUrls: ['./corte-caja.component.css']
})
export class CorteCajaComponent implements OnInit{

  constructor(private route: ActivatedRoute,public corteCajaService: CorteCajaService){}
  records: any[] = [];
  selectedDate: string = '';
  total:number = 0;
  today = new Date().toISOString().slice(0, 10);

  getCorte(){
    this.corteCajaService.getCorte(this.today).subscribe(
      records => {
        this.corteCajaService.cortes = records;
        console.log(records);
        this.total = this.corteCajaService.cortes.reduce((
          acc,obj,) => acc + (obj.monto * 1),0);
        console.log("Total: ", this.total)
      },
    
      err => console.log(err)
    )
  }
  

  
  ngOnInit(): void {
   
  }
  

}
