
module.exports = class profile 
  {
      __constructor(db) 
      {
          this.db = db.Models().User;
      }

      async function findUser(filter) 
            {
                this.db.findOne(filter)
                if (!this.db) return false; 
                return this;
            } 

      async function changeProfilePicture(picture) 
      {
      }
  }
