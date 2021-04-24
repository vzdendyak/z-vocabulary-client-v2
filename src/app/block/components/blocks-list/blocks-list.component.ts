import {Component, OnInit} from '@angular/core';
import {BlockApiService} from '../../services/block-api.service';
import {BlockModel} from '../../models/block-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit {
  public data: BlockModel[];

  constructor(private blockService: BlockApiService, private router: Router) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  async loadData() {
    this.data = await this.blockService.getBlocks().toPromise();
  }

  public async createBlock(name: string) {
    console.log(name);
    if (!name) {
      return;
    }
    let result = await this.blockService.createBlock(name).toPromise();
    console.log(result);
    if (result) {
      await this.loadData();
    }
  }

  goToBlockDetail(id: number, name: string) {
    this.router.navigate([`/blocks/${id}`], {queryParams: {name}});
  }
}
