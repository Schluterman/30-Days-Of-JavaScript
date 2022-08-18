try {
    // code that may throw an error
  } catch (err) {
    // code to be executed if an error occurs
  } finally {
    // code to be executed regardless of an error occurs or not
  }

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

try{
    let str =(1,2,3,5,67,7)
    let total = str.length-1 + str[0]
 } catch (err){
    console.log('Name of the error', err.name)
    console.log('error message',error.message)
 } finally{
    console.log('in any case idk wtf to do')
 }
 