import {Component, OnInit} from '@angular/core';
import {BlockApiService} from '../../services/block-api.service';
import {BlockModel} from '../../models/block-model';

@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit {
  public data: BlockModel[];

  constructor(private blockService: BlockApiService) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  async loadData() {
    this.data = await this.blockService.getBlocks().toPromise();
  }
}
