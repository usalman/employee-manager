import React from 'react'

const AddEmployee = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Adı:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Cinsiyeti</label>
          <select name="" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Grubu</label>
          <select name="" id="">
            <option value="destek">Destek</option>
            <option value="muhasebe">Muhasebe</option>
            <option value="analiz">Analiz</option>
            <option value="yazilim">Yazılım</option>
            <option value="yonetim">Yönetim</option>
          </select>
        </div>
        <div>
          <label htmlFor="">İşe Giriş Tarihi:</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">İşten Çıkış Tarihi:</label>
          <input type="date" />
        </div>
        <button type="submit">Ekle</button>
      </form>
      <button type="button">Grafikleri Göster</button>
    </div>
  )
}

export default AddEmployee
