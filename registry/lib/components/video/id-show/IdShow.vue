<template>
  <div class="id-show">
    <div v-if="aid" class="id-show-item">
      AID: {{ aid }}
      <div class="id-show-item-copy" title="复制" @click="copyLink('aid', aid)">
        <VIcon :size="16" :icon="aidCopied ? 'mdi-check' : 'mdi-link'" />
      </div>
    </div>
    <div v-if="aid" class="id-show-item">
      CID: {{ cid }}
      <div class="id-show-item-copy" title="复制" @click="copyLink('cid', cid)">
        <VIcon :size="16" :icon="cidCopied ? 'mdi-check' : 'mdi-link'" />
      </div>
    </div>
    <div v-if="bvid" class="id-show-item">
      BVID: {{ bvid }}
      <div class="id-show-item-copy" title="复制" @click="copyLink('bvid', bvid)">
        <VIcon :size="16" :icon="bvidCopied ? 'mdi-check' : 'mdi-link'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { videoChange } from '@/core/observer'
import { getComponentSettings } from '@/core/settings'
import { select } from '@/core/spin-query'
import { getFriendlyTitle } from '@/core/utils/title'
import { VIcon } from '@/ui'
import { BvidConvertOptions } from '.'

const { options } = getComponentSettings<BvidConvertOptions>('bvidConvert')

enum CopyIdType {
  Aid = 'aid',
  Cid = 'cid',
  Bvid = 'bvid',
}

export default Vue.extend({
  components: { VIcon },
  data() {
    return {
      aid: '',
      aidCopied: false,
      cid: '',
      cidCopied: false,
      bvid: '',
      bvidCopied: false,
    }
  },
  async mounted() {
    videoChange(async () => {
      this.aid = unsafeWindow.aid
      this.cid = unsafeWindow.cid
      this.bvid = unsafeWindow.bvid
      const link = (await select('.av-link,.bv-link,.bvid-link')) as HTMLElement
      if (link) {
        this.bvid = link.innerHTML.trim()
      }
    })
  },
  methods: {
    async copyLink(data: CopyIdType, id: any) {
      if (this[`${data}Copied`]) {
        return
      }
      if (options.copyWithTitle) {
        await navigator.clipboard.writeText(`${getFriendlyTitle()} ${id}`)
      } else {
        await navigator.clipboard.writeText(id)
      }
      this[`${data}Copied`] = true
      setTimeout(() => (this[`${data}Copied`] = false), 1000)
    },
  },
})
</script>

<style lang="scss">
@import 'common';
.id-show {
  order: -1;
  flex-direction: column;
  border-radius: 4px;
  padding: 6px 8px;
  user-select: text;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #8884;
  @include default-background-color();
  &-item {
    font-size: 14px;
    @include h-center(6px);
    &-copy {
      transition: transform 0.3s ease-out;
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
