<script>
    export let data
    export let form
</script>

<form method="POST" enctype="multipart/form-data">
    {#if form?.message}
        <div class="error">{form.message}</div>
    {/if}    
    <input type="file" name="file" accept=".pdf, .docx, .doc, .pptx, .ppt, .xlsx, .xls" value=""/>
    <input type="text" name="title">
    <button>Upload</button>
</form>

<style>
    form {
        margin-top: 200px;
        margin-bottom: 200px;
    }
    .documents {
        width: 300px;
    }
</style>