const client = require('./redisConfig')
async function runRedisBlock1()
{

    console.log(await client.set('foo', 'bar')); // 'OK'
    console.log(await client.get('foo')); // 'bar'
    const arrayEle=['a', 'b', 'c', 'd', 'e']
    // Example
   for(ele of arrayEle){ await client.rPush('data', ele)}
    const value = await client.lRange('data', 0, -1);

    console.log(value.length);
    console.log(value);

   // await client.lRem('data', 'item');

    client.quit();
}

runRedisBlock1()