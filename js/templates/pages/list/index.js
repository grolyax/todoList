const template = `
<span class="email-user"></span>
<div class="logout">
    <a class="home-btn" href="/"><i class="fas fa-long-arrow-alt-left"></i></a> 
    <button class="logout-btn">LogOut</button>
</div>
    
    <div class="add-form">
        <form>
            <input type="text" name="text" placeholder="Enter task...">
            <button type="submit"><i class="fas fa-plus"></i> </button>
        </form>
    </div>
     
    <div class="todo-list">
            <ol></ol>
    </div>
        
    <div class="delete-checked-wrapper">
        <button class="delete-checked-btn">Delete Checked</button>
    </div>
`;

export default template;