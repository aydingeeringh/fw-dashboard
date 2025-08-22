<script>
	import '@evidence-dev/tailwind/fonts.css';
	import '../app.css';
	import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
	export let data;
</script>

<EvidenceDefaultLayout 
    {data} 
    logo="{base}/images/logo.png"
	homePageName="Dashboard"
>
	<slot slot="content" />
</EvidenceDefaultLayout>
