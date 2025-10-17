import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// 人生羅盤圖
export function LifeCompassDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;

    // 清空畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製圓形背景
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#7ad1ff40";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 繪製十字線
    ctx.beginPath();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.strokeStyle = "#9b8cff30";
    ctx.lineWidth = 1;
    ctx.stroke();

    // 繪製方位標籤
    const directions = [
      { label: "現況", angle: 0, color: "#7ad1ff" },
      { label: "目標", angle: Math.PI / 2, color: "#7fe2c5" },
      { label: "路徑", angle: Math.PI, color: "#f7d37b" },
      { label: "代價", angle: (Math.PI * 3) / 2, color: "#ff7aa8" },
    ];

    ctx.font = "14px 'Noto Sans TC'";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    directions.forEach(({ label, angle, color }) => {
      const x = centerX + Math.cos(angle) * (radius + 30);
      const y = centerY + Math.sin(angle) * (radius + 30);
      ctx.fillStyle = color;
      ctx.fillText(label, x, y);

      // 繪製方位點
      const dotX = centerX + Math.cos(angle) * radius;
      const dotY = centerY + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    // 繪製中心點
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#9b8cff";
    ctx.fill();
  }, []);

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} width={400} height={400} />
    </motion.div>
  );
}

// 三視點收斂圖
export function ThreeViewpointsDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製三個圓形視點
    const viewpoints = [
      { x: centerX, y: centerY - radius, color: "#7ad1ff", label: "理性" },
      {
        x: centerX - radius * 0.866,
        y: centerY + radius * 0.5,
        color: "#ff7aa8",
        label: "感性",
      },
      {
        x: centerX + radius * 0.866,
        y: centerY + radius * 0.5,
        color: "#7fe2c5",
        label: "旁觀",
      },
    ];

    // 繪製連接線
    ctx.strokeStyle = "#9b8cff30";
    ctx.lineWidth = 2;
    for (let i = 0; i < viewpoints.length; i++) {
      const start = viewpoints[i];
      const end = viewpoints[(i + 1) % viewpoints.length];
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }

    // 繪製視點圓圈和標籤
    ctx.font = "16px 'Noto Sans TC'";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    viewpoints.forEach(({ x, y, color, label }) => {
      // 繪製圓圈
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fillStyle = color + "20";
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();

      // 繪製標籤
      ctx.fillStyle = color;
      ctx.fillText(label, x, y);
    });

    // 繪製中心收斂點
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#f7d37b";
    ctx.fill();
    ctx.strokeStyle = "#f7d37b";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#0b0b0f";
    ctx.font = "12px 'Noto Sans TC'";
    ctx.fillText("真相", centerX, centerY);
  }, []);

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <canvas ref={canvasRef} width={400} height={400} />
    </motion.div>
  );
}

// 四大特性雷達圖
export function FourTraitsRadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = 120;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製背景網格
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius / 5) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#9b8cff15";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 繪製軸線
    const traits = [
      { label: "低失誤", angle: -Math.PI / 2, value: 0.9, color: "#7ad1ff" },
      { label: "低風險", angle: 0, value: 0.85, color: "#7fe2c5" },
      { label: "高評價", angle: Math.PI / 2, value: 0.95, color: "#f7d37b" },
      { label: "高動能", angle: Math.PI, value: 0.88, color: "#9b8cff" },
    ];

    traits.forEach(({ angle }) => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * maxRadius,
        centerY + Math.sin(angle) * maxRadius
      );
      ctx.strokeStyle = "#9b8cff20";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // 繪製數據區域
    ctx.beginPath();
    traits.forEach(({ angle, value }, index) => {
      const x = centerX + Math.cos(angle) * maxRadius * value;
      const y = centerY + Math.sin(angle) * maxRadius * value;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = "#7ad1ff30";
    ctx.fill();
    ctx.strokeStyle = "#7ad1ff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 繪製標籤和數值點
    ctx.font = "14px 'Noto Sans TC'";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    traits.forEach(({ label, angle, value, color }) => {
      // 標籤位置
      const labelX = centerX + Math.cos(angle) * (maxRadius + 35);
      const labelY = centerY + Math.sin(angle) * (maxRadius + 35);
      ctx.fillStyle = color;
      ctx.fillText(label, labelX, labelY);

      // 數值點
      const dotX = centerX + Math.cos(angle) * maxRadius * value;
      const dotY = centerY + Math.sin(angle) * maxRadius * value;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }, []);

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <canvas ref={canvasRef} width={400} height={400} />
    </motion.div>
  );
}

// 思維流程圖
export function ThinkingFlowDiagram() {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-4">
        {[
          { step: "輸入", desc: "問題/情境/數據", color: "#7ad1ff" },
          { step: "處理", desc: "結構化分析/多視角驗證", color: "#9b8cff" },
          { step: "收斂", desc: "三視點結論", color: "#f7d37b" },
          { step: "輸出", desc: "可驗證的答案/地圖", color: "#7fe2c5" },
        ].map((item, index) => (
          <motion.div
            key={item.step}
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold border-2"
              style={{
                backgroundColor: item.color + "20",
                borderColor: item.color,
                color: item.color,
              }}
            >
              {item.step}
            </div>
            <div className="flex-1">
              <p className="text-lg text-[#eaeaf1]">{item.desc}</p>
            </div>
            {index < 3 && (
              <div className="text-3xl text-[#9b8cff]">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

