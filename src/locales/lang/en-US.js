import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

const locale = {
  'message': '-',
  'menu.home': 'Home',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Analysis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',

  'menu.form': 'Form',
  'menu.form.basicForm': 'BasicForm',
  'menu.form.advancedForm': 'AdvancedForm',
  'menu.form.stepForm': 'StepForm',
  'menu.form.detailForm': 'DetailForm'
}

export default {
  ...components,
  ...locale
}
