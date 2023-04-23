interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
  $dialog?: import('naive-ui').DialogProviderInst
  $message?: import('naive-ui').MessageProviderInst
  $notification?: import('naive-ui').NotificationProviderInst
}

declare namespace Common {
  /**
   * 策略模式
   * [状态, 状态为true回调函数]
   */
  type StrategyAction = [boolean, () => void]

  /**
   * 选项数据
   * Select Option List
   */
  type OptionWithKey<K> = { value: K; label: string }
}
