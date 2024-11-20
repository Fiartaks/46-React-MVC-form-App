const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gönderi Ekle</h2>
      <fieldset>
        <label>Kullanici Adi</label>
        <input
          type="text"
          placeholder="Kullanici Adi Giriniz"
          onChange={(e) => onInputChange("user", e)}
        />
      </fieldset>

      <fieldset>
        <label>Baslik</label>
        <input
          type="text"
          placeholder="Baslik Giriniz..."
          onChange={(e) => onInputChange("title", e)}
        />
      </fieldset>

      <fieldset>
        <label>Kullanici Adi</label>
        <textarea
          type="text"
          placeholder="Aciklama Giriniz..."
          onChange={(e) => onInputChange("text", e)}
        />
      </fieldset>
      <button>Gonder</button>
    </form>
  );
};
export default AddPostView;
