const express = require("express");
const {
  createAssistant,
  updateAssistant,
  getAllAssistants,
  findAssistantById,
} = require("../controller/assistantcontroller.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.post("/assistants", upload.single("image"), createAssistant);
router.put("/assistants/:id", upload.single("image"), updateAssistant);
router.get("/assistants", getAllAssistants);
router.get("/assistants/:id", findAssistantById);
module.exports = router;
