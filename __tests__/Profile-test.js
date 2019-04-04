import Profile from '../components/Profile';

describe("Testing Profile Functionality", () =>{

    it("Adds Subscriptions to Profiles Subscription", () =>{
        let p = new Profile('Billy', 'billyreyes@rogers.com', 'sidnot', 'password');
        let sub = 9;
        p.addSubscription(sub);
        expect(p.getSubscriptions()).toEqual([9])
    })
})