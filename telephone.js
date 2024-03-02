class Observer {
    update(phoneNumber) {}
  }
  
  // implementation to print phone number
  class PhoneNumberObserver extends Observer {
    update(phoneNumber) {
      console.log("Phone Number:", phoneNumber);
    }
  }
  
  //  implementation to print custom message
  class CustomObserver extends Observer {
    update(phoneNumber) {
      console.log("Now Dialing", phoneNumber);
    }
  }
  
  // Telephone class implementing observer pattern
  class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => {
        observer.update(phoneNumber);
      });
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
      console.log("Phone number added:", phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index !== -1) {
        this.phoneNumbers.splice(index, 1);
        console.log("Phone number removed:", phoneNumber);
      } else {
        console.log("Phone number not found.");
      }
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        console.log("Dialing:", phoneNumber);
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Phone number not found.");
      }
    }
  }
  
  // Telephone usage
  const telephone = new Telephone();
  const phoneNumberObserver = new PhoneNumberObserver();
  const customObserver = new CustomObserver();
  
  // Adding observers
  telephone.addObserver(phoneNumberObserver);
  telephone.addObserver(customObserver);
  
  // User interactions
  function addPhoneNumber(phoneNumber) {
    telephone.addPhoneNumber(phoneNumber);
  }
  
  function removePhoneNumber(phoneNumber) {
    telephone.removePhoneNumber(phoneNumber);
  }
  
  function dialPhoneNumber(phoneNumber) {
    telephone.dialPhoneNumber(phoneNumber);
  }
  
  // phone number:
  addPhoneNumber("+2348127790800");
  addPhoneNumber("+2349132044239");
  
  dialPhoneNumber("+2348127790800");
  dialPhoneNumber("+2349132044239");
  dialPhoneNumber("+2348127790800"); // Not added, so it won't dial
  
  removePhoneNumber("+2349132044239");
  dialPhoneNumber("+2348127790800"); // Not added, so it won't dial
  