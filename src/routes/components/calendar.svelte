<script>
    export let activeDay = 0

    let date = new Date();

    let currentDay = date.getDate()
    
    let currentMonth = date.getMonth()
    let currentM = `${currentMonth + 1}`;

    let num = 0

    let m = `${currentMonth + 1}`;

    function numCheck() {
        if (num === -1) {
        m = `${currentMonth - 0}`;
        } else if (num === -2) {
            m = `${currentMonth - 1}`;
        } else if (num === 0) {
            m = `${currentMonth + 1}`;
        } else if (num === 1) {
            m = `${currentMonth + 2}`;
        } else if (num === 2) {
            m = `${currentMonth + 3}`;
        } else if (num === 3) {
            m = `${currentMonth + 4}`;
        } else if (num === 4) {
            m = `${currentMonth + 5}`;
        } else if (num === 5) {
            m = `${currentMonth + 6}`;
        } else if (num === 6) {
            m = `${currentMonth + 7}`;
        } else if (num === 7) {
            m = `${currentMonth + 8}`;
        } else if (num === 8) {
            m = `${currentMonth + 9}`;
        } else if (num === 9) {
            m = `${currentMonth + 10}`;
        } else if (num === 10) {
            num = 9
        } else if (num === -3) {
            num = -2
        }
    }

    let currentYear = date.getFullYear()

    let days = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
    ]

    let months = [
        {id: '1', Month: 'Январь', class: 'yan'},
        {id: '2', Month: 'Февраль', class: 'feb'},
        {id: '3', Month: 'Март', class: 'march'},
        {id: '4', Month: 'Апрель', class: 'april'},
        {id: '5', Month: 'Май', class: 'may'},
        {id: '6', Month: 'Июнь', class: 'june'},
        {id: '7', Month: 'Июль', class: 'july'},
        {id: '8', Month: 'Август', class: 'aug'},
        {id: '9', Month: 'Сентябрь', class: 'sep'},
        {id: '10', Month: 'Октябрь', class: 'oct'},
        {id: '11', Month: 'Ноябрь', class: 'nov'},
        {id: '12', Month: 'Декабрь', class: 'dec'}
    ]

    function show() {
        console.log(activeDay)
    }
</script>

<div class="calendar">
    <div class="calendar__month">
        <div class="calendar__month-arrow prev _icon-btn-arrow" on:click={() => {num--, numCheck()}}></div>
        {#each months as month}
            {#if m === month.id}
                <div class="calendar__month-item">{month.Month} {currentYear}</div>
            {/if}
        {/each}
        <div class="calendar__month-arrow next _icon-btn-arrow" on:click={() => {num++, numCheck()}}></div>
    </div>
    <div class="calendar__head">
        <div class="calendar__head-item">П</div>
        <div class="calendar__head-item">В</div>
        <div class="calendar__head-item">С</div>
        <div class="calendar__head-item">Ч</div>
        <div class="calendar__head-item">П</div>
        <div class="calendar__head-item">С</div>
        <div class="calendar__head-item">В</div>
    </div>

    {#each months as month}
        {#if m === month.id}
        <div class='calendar__content {month.class}'>
            {#each days as day}
                <div class={currentM === month.id && day === currentDay ? 'calendar__item active' : 'calendar__item' ? day < currentDay && currentM === month.id ? 'calendar__item disable' : 'calendar__item' : 'calendar__item'} on:click={() => {activeDay = day, show()}}>{day}</div>
            {/each}
        </div>
        {/if}
    {/each}
</div>