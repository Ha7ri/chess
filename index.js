let board = document.getElementById("board");
for(let i =1;i <= 8;i++)
{
    const cellcontainer = document.createElement("div");
    cellcontainer.className = "cellcontainer";
    for(let j = 1;j <= 8;j++)
    {
        const cell = document.createElement("div");
        cell.className = "cell";
        if ( i % 2 === 0 )
        {
            if ( j % 2 === 0)
            {
                cell.style.backgroundColor ="black";
            }
            else{
                cell.style.backgroundColor = "white";
            }
        }
            else{
                if(j % 2 === 0)
                {
                    cell.style.backgroundColor = "white";
                
                }
                else{
                    cell.style.backgroundColor = "black";
                }
            }

        
        cellcontainer.append(cell);

    }
    board.append(cellcontainer);
}