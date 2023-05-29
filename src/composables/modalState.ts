interface Props {
  visible: boolean
}

type EmitFn = (
  e: 'update:visible',
  visible: boolean
) => void

/**
 * Modal等展示类二次封装Visible状态
 */
export function useModalState(props: Props, emit: EmitFn) {
  const modalVisible = computed({
    get() {
      return props.visible
    },
    set(val) {
      emit('update:visible', val)
    }
  })

  return { modalVisible }
}
