
document.addEventListener("DOMContentLoaded", async(e) => {
    console.log('file linked')

    const rows = document.querySelectorAll('.ticket-table-row');
    // skip the first element/row, which is the column labels themselves.
    if(rows){
        for(let i = 1; i < rows.length; i++){
            const row = rows[i];
            const id = row.getAttribute("data")
            row.addEventListener('click', () => {
                window.location.replace(`/details/${id}`)
            })
        }
    }
});