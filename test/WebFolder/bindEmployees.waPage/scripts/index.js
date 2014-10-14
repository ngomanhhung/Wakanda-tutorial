
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Bind = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Bind.click = function Bind_click (event)// @startlock
	{// @endlock
		sources.employee.employer.set(sources.company);
		
		sources.employee.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Bind", "click", Bind.click, "WAF");
// @endregion
};// @endlock
