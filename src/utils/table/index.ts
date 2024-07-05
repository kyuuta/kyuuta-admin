import type { DataTableColumns } from 'naive-ui'
import { mergeWith } from 'lodash-es'

/** 计算Table ScrollX */
// export function computeScrollX(
//   data: DataTableColumn[]
// ): number {
//   return data.reduce((prev, next) => {
//     return (
//       prev +
//       (next.width
//         ? next.width
//         : next.type === 'selection'
//         ? 40
//         : 0)
//     )
//   }, 0)
// }

/** 设置Table Column默认配置 */
export function mergeTableColumn(
  data: DataTableColumns
): DataTableColumns {
  return data.map((item) => {
    return mergeWith(item, {
      ellipsis: {
        tooltip: {
          contentStyle: {
            maxWidth: '400px'
          }
        }
      },
      align: 'center',
      titleAlign: 'center',
      render: (item as any).render
        ? (item as any).render
        : (row: any) => {
            return row[(item as any).key] || '-'
          }
    })
  })
}
