module.exports = class userFunction
        {
            __constructor(db) 
            {
                this.db = db; 
            }

            async function findUser(filter) 
            {
                var result = await this.db.query("select * from users where ? = ?", [filter]); 
                if (result.length == 0) return false; 
                this.user = result[0]; 
                return this;
            }

            function getUserData() 
            {
                return (this.user) ? this.user : false;
            }

            async function update(data) 
            {
                var parsed_data = [];
                var cache = [];
                Object.keys(data).forEach(key => {
                    parsed_data.push(key) ;
                    cache.push(data[key]);
                });
                parsed_data.concat(cache); 
                this.db.query(mys
            }
        }
