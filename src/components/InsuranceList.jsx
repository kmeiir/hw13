import { useState } from "react";
import InsurProduct from "./InsurancePoduct";

const products = [
  { id: 1, name: "ОГПО ВТС", category: "Авто", price: "от 30 000 ₸/год", description: "Обязательное страхование автогражданской ответственности." },
  { id: 2, name: "КАСКО", category: "Авто", price: "от 50 000 ₸/год", description: "Защита собственного авто от угона, ДТП, стихийных бедствий." },
  { id: 3, name: "ДМС", category: "Здоровье", price: "от 80 000 ₸/год", description: "Добровольное медицинское страхование: клиники, стоматология." },
  { id: 4, name: "Имущество", category: "Имущество", price: "от 15 000 ₸/год", description: "Страхование квартиры или дома от пожара, затопления, кражи." },
  { id: 5, name: "ВЗР", category: "Путешествия", price: "от 20 000 ₸/поездка", description: "Медицинская помощь за рубежом, отмена поездки, потеря багажа." },
];

export default function InsuranceList() {
  const [likedIds, setLikedIds] = useState([]);

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div style={styles.grid}>
      {products.map((p) => (
        <InsurProduct
          key={p.id}
          {...p}
          liked={likedIds.includes(p.id)}
          onToggleLike={() => toggleLike(p.id)}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gap: "12px",
  },
};