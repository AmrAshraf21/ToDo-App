let theInput = document.querySelector('.add-task input'),
    theAddButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.task-count span'),
    tasksCompleted = document.querySelector('.tasks-completed span');

    window.onload = function(){
        theInput.focus();
                localStorage.getItem('task1')
    };

    theAddButton.onclick = function(){
        if(theInput.value ===""){
          alert('enter your tasks')
        }else{
            window.localStorage.setItem('task1',theInput.value)
            let noTaskMsg = document.querySelector('.no-task-message')

            if(document.body.contains(document.querySelector('.no-task-message'))){

                noTaskMsg.remove();
                
            }


                let mainSpan = document.createElement('span')
                let deleteElement = document.createElement('span')

                let text = document.createTextNode(theInput.value)
                let deleteText = document.createTextNode('Delete')

                    mainSpan.appendChild(text)
                    mainSpan.className = 'task-box';

                    deleteElement.appendChild(deleteText);
                    deleteElement.className = 'delete';

            mainSpan.appendChild(deleteElement);

            tasksContainer.appendChild(mainSpan);
            theInput.value = '';
                theInput.focus();
                
                    
                clacTasks()
                }
               
      
    }

                             //MAKE THE DELETE Button All
        //****************************************************************

        
        let delAll = document.getElementsByClassName('del-all')[0];
             delAll.addEventListener('click',function(){
                let maindel = document.querySelectorAll('.task-box');
                maindel.forEach((e)=>{
                    e.remove();
                  
                    
                })
                createNoTasks()
            })
         
// //**************************************************************************** */

//                     //Make the Button Finish All 
//                     // *************************
let finAll   = document.getElementsByClassName('fin-all')[0];
            finAll.addEventListener('click',function(){
                let mainfin = document.querySelectorAll('.task-box');
                mainfin.forEach(e =>{
                    e.classList.add('finished')
                })
            })
                 //****************************************** /


                

                 // Make the Delete And Finish Button one element
   //************************************************************ *** */              
    document.addEventListener('click' , function(e){

        if(e.target.className =='delete'){
            e.target.parentNode.remove();


            if(tasksContainer.childElementCount ===0){
                createNoTasks()
            }
        }
        if(e.target.classList.contains('task-box')){
            e.target.classList.toggle('finished')
            
        }

        clacTasks()
    })
 //*********************************************************************************** */


                            //Function To Create No Tasks
 //*********************************************************************************** */
 function createNoTasks(){
     let msgSpan = document.createElement('span');
     let msgText = document.createTextNode('No Tasks to show');
     
     msgSpan.appendChild(msgText);
     msgSpan.classList.add('no-task-message')
     tasksContainer.appendChild(msgSpan);
    }
    //*********************************************************************************** */
    
                                // Function To  Calc Tasks
    //*********************************************************************************** */
    
    
    function clacTasks(){
        
        tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length
        tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length
        
    }

                    //Local Storage
    //*********************************************************************************** */


    