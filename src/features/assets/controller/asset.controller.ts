import { Post, Get, Param, Query } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import { AssetService } from '../service/asset.service';
import { Asset } from '../schema/asset.schema';
import { PointDto } from '../dto/point.dto';

@Controller('assets')
export class AssetController {
  constructor(private assetService: AssetService) {}

  @Post('create')
  async saveAssetPart(@Body() assets: Asset[]) {

    const asset = await this.assetService.createAssetPart(assets);
    return asset;
  }

  @Get('all')
  async getAllAsset() {
    const allAssets = await this.assetService.getAll();
    return allAssets;
  }

  @Post('init')
  async initAllAsset() {
    const result = await this.assetService.initAll();
    return result;
  }

  @Post('coord')
  async getAssetByCoord(@Body() point: PointDto) {      
    const result = await this.assetService.validateAssetByCoord(point);
    return result;
  }
}
