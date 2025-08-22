<script>
	import '@evidence-dev/tailwind/fonts.css';
	import '../app.css';
	import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
	export let data;
</script>


<EvidenceDefaultLayout {data} hideSidebar=true fullWidth=true hideHeader=true hideTOC=true neverShowQueries=true homePageName="Dashboard">
	<slot slot="content" />
</EvidenceDefaultLayout>