One of the most important design patterns I used in this project is using audited libraries where appropriate --  ERC721Token, Ownable, Pausable. All of these come from the Zeppelin library which allowed me to have a lot of the logic I needed without having to worry about security concerns of writing it from scratch.

I added the ability to pause the contract in the event it is acting incorrectly or compromised in some way. All of the public methods have a `whenNotPaused` modifier on them.

I used the Ownable zeppelin library to allow for most methods so that those methods can not be called by anyone but the owner of the contract. The function mintTo remains open to all users, as the only public function available to them.
