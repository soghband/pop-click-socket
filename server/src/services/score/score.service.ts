import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Score } from '../../entity/score.entity';

@Injectable()
export class ScoreService {
  connection = getConnection();
  queryRunner = null;

  constructor() {
    this.queryRunner = this.connection.createQueryRunner();
    this.queryRunner.connect();
  }

  async getScoreByCity(city, countryCode) {
    return this.queryRunner.query(
      "SELECT * FROM score WHERE city='" +
        city +
        "' AND country_code='" +
        countryCode +
        "'",
    );
  }
  async insertScore(score, jwtData) {
    await this.queryRunner.startTransaction();
    const value = [
      score,
      "'" + jwtData.city + "'",
      "'" + jwtData.country + "'",
      "'" + jwtData.countryCode + "'",
    ];
    await this.queryRunner.query(
      'INSERT INTO score(score,city,country,country_code) VALUES(' +
        value.join(',') +
        ')',
    );
    await this.queryRunner.commitTransaction();
  }

  async updateScore(s: number, jwtData: any) {
    await this.queryRunner.startTransaction();
    await this.queryRunner.query(
      'UPDATE score SET score=' +
        s +
        " WHERE city='" +
        jwtData.city +
        "' AND country_code='" +
        jwtData.countryCode +
        "'",
    );
    await this.queryRunner.commitTransaction();
  }

  async getTopTen() {
    return this.queryRunner.query(
      'SELECT * FROM score ORDER BY score DESC LIMIT 10',
    );
  }
}
