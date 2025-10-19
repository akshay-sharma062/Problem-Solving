 let arr = ['geeksforgeeks','geeks','geek','geezer']

//  if (arr[0]<arr[1] || arr[2]<arr[1] || arr[3]<arr[1])
//  {
//      if (arr[1]<arr[0] || arr[2]<arr[0] || arr[3]<arr[0])
//      {
//          console.log(arr[0])    
//      }
//      if (arr[1]<arr[2] || arr[0]<arr[2] || arr[3]<arr[2])
//      {
//          console.log(arr[2])
//      console.log(arr[1])
//  }
//  }
//  else
//  {
//      console.log(arr[3])
 
//  }
lonestPrefix = (arr)=>{
        let prefix = arr[0]
        for (let i = 0; i < prefix.length; i++) {
            if(prefix.length[i] == arr.length[i])
            {
                console.log(prefix)
            }while(prefix.length[i] == arr.length[i]){
                prefix.slice(0,-1)
                console.log("while",prefix)
            }
            console.log("outer" ,prefix)
        }
}
lonestPrefix(arr)