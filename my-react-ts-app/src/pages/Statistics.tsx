export default function Statistics() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Statistics</h1>

      {/* ตัวอย่างการ์ดสรุป */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">ผู้ใช้ทั้งหมด</p>
          <p className="text-3xl font-semibold">1,234</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">คำขอวันนี้</p>
          <p className="text-3xl font-semibold">87</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">อัตราสำเร็จ</p>
          <p className="text-3xl font-semibold">96%</p>
        </div>
      </div>

      {/* พื้นที่กราฟ/ตารางภายหลัง */}
      <div className="bg-white rounded-xl shadow p-6 min-h-40">
        <p className="text-gray-500">พื้นที่สำหรับกราฟหรือตาราง</p>
      </div>
    </section>
  );
}