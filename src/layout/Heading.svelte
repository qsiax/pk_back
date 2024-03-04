<script>
    export let pageMapName, pageName, pageHeading;
</script>

<div class="page-heading">
    <div class="page-heading-container _container">
        <ul class="page-heading-content">
            <li><a href="/">Главная -</a></li>
            <li><a>{pageMapName}</a></li>
            <li><a class="active">{pageName}</a></li>
        </ul>
        <div class="page-heading-title">{pageHeading}</div>
    </div>
</div>

<style lang="scss">
    @import '../variables.scss';

    .page-heading {
        margin-top: $mtpage;
        @media (max-width: 600px) {
            margin-top: $mtpage-mb;
        }   
        &-content {
            display: flex;
            margin-bottom: 40px;
            @media (max-width: 600px) {
                margin-bottom: 20px;
            }
            li {
                font-weight: 400;
                font-size: 20px;
                line-height: 120%;
                margin-right: 2px;
                @media (max-width: 600px) {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 120%;
                    &:first-child {
                        min-width: 68px;
                    }
                }
                &:last-child {
                    margin-right: 0;
                }
                a {
                    color: $text-secondary;
                    &.active {
                        color: $text;
                    }
                }
            }
        }
        &-title {
            font-weight: 500;
            font-size: 75px;
            line-height: 90%;
            letter-spacing: -0.03em;
            text-transform: uppercase;
            margin-bottom: 100px;
            white-space: pre-wrap;
            @media (max-width: 600px) {
                font-size: 32px;
                font-weight: 500;
                line-height: 100%;
                letter-spacing: -0.96px;
                text-transform: uppercase;
                margin-bottom: 40px;
            }
        }
    }
</style>