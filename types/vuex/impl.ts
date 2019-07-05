import * as Sample from '../../store/sample/type'
import * as Global from '../../store/global/type'

declare module 'vuex' {
  type RootState = {
    sample: Sample.S
    global: Global.S
  }
  type RootGetters = Sample.RG & Global.RG
  type RootMutations = Sample.RM & Global.RM
  type RootActions = Sample.RA & Global.RA
}
