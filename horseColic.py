import gradient_asc as ga
#根据预测概率判断类别

def classifyVector(inX,weights):
	prob = ga.sigmoid(sum(inX * weights))
	if prob > 0.5:
		return 1.0
	else:
		return 0.0

def colicTest():
	frTrain = open('D:/py_work/data/grad_asc/horseColiic/horseColicTraining2.txt')
	frTest = open('D:/py_work/data/grad_asc/horseColiic/horseColicTest2.txt')
	trainingSet = []      #初始化用于训练的数据集
	traingLabels = []
	for line in frTrain.readlines():
		currLine = line.strip().split('\t')
		lineArr = []
		for i in range(21):
			lineArr.append(float(currLine[i]))
		trainingSet.append(lineArr)
		trainingLabels.append(float(currLine[21]))
	trainWeights = ga.improve_gradAsc(array(trainingSet),trainingLabels,500)
	errorCount = 0
	numTestVec = 0.0
	for line in frTest.readlines():
		numTestVec += 1.0
		currLine = line.strip().split('\t')
		lineArr = []
		for i in range(21):
			lineArr.append(float(currLine[i]))
		if int(classifyVector(array(lineArr),trainingWeights)) != int(currLine[21]):
			errorCount += 1
	errorRate = (float(errorCount) / numTestVec)
	print("the error rate is",errorRate)
	return errorRate

def multiTest():
	numTests = 10
	errorSum = 0.0
	for k in range(numTests):
		errorSum += colicTest()
	print("the average error rate is",errorSum / float(numTests))

