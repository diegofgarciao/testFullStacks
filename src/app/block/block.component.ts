import { BlockAux, BlockResponse } from './../../models/block.model';
import { Component, Input, OnInit } from '@angular/core';
import { BlockStoreService } from '../services/block-store.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() urlNode: string;

  blocksData : BlockResponse;
  arrayResponse: BlockAux[];
  constructor(private store: BlockStoreService) {

  }

  ngOnInit() {
    this.store.getBlocksHttp(this.urlNode)
    .subscribe(data => {
      console.log(data);
      this.blocksData = data;
      this.arrayResponse = this.blocksData.data;
    },(error) => {
      console.warn(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ''+error.status+' '+error.statusText+'',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }

}
