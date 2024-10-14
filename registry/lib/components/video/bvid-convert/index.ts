import {
  defineComponentMetadata,
  defineOptionsMetadata,
  OptionsOfMetadata,
} from '@/components/define'
import { hasVideo } from '@/core/spin-query'
import { videoAndBangumiUrls } from '@/core/utils/urls'

const options = defineOptionsMetadata({})
export const component = defineComponentMetadata({
  name: 'idShow',
  displayName: 'ID显示',
  options,
  entry: none,
  description: {
    'zh-CN': '在功能面板中显示视频的AV、BV、CID号.',
  },
  tags: [componentsTags.video, componentsTags.utils],
  widget: {
    component: () => import('./BvidConvert.vue').then(m => m.default),
    condition: hasVideo,
  },
  urlInclude: videoAndBangumiUrls,
})
export type BvidConvertOptions = OptionsOfMetadata<typeof options>
