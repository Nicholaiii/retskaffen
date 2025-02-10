<template>
  <UApp>
    <UCard class="mx-auto mt-4 lg:mt-10 bg-neutral-100 w-96 drop-shadow-lg border-none">
      <Logo class="mt-2" />
      <QR />
      <Date />
      <KvitteringsTaeller :nummer="data!.nummer"/>
      <ItemList :data="data!" />
      <Barcode />
      <Scan />
      <URL />
      <FooterContainer />
    </UCard>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  title: 'Retskaffen',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  meta: [{ name: 'apple-mobile-web-app-title', content: 'Retskaffen' }],
})

const { data } = await useFetch('/api/kvitteringer').catch((cause) => {
  throw new Error('KRITISK TILSTAND; INGEN ELEKTRONISK DATA AT BEHANDLE', { cause })
})
</script>
