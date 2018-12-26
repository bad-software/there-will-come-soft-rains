import { Model } from 'Models'
import * as ctrl from './controller'
import { common } from './common'

export const Choices = new class C_Choices extends Model {
  constructor() {
    super()
  }

  common = common

  ctrl = ctrl
}
