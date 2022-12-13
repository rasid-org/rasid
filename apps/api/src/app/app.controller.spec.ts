
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Test } from '@nestjs/testing'
import type { TestingModule } from '@nestjs/testing'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()
  })

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getData()).toEqual({ message: 'Welcome to api!' })
    })
  })
})
